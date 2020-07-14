import React from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

export const PointsTable = ({ list }) => {
  return (
    <div>
      <h1
        style={{
          fontSize: "3.947vw",
          textAlign: "center",
        }}
      >
        POINTS TABLE
      </h1>

      <Table
        className="mx-auto"
        style={{ alignItems: "center", width: "70%" }}
        responsive
        bordered
        hover
      >
        <thead>
          <tr
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              height: "3.289vw",
            }}
          >
            <th style={{ width: "3.947vw" }}>Rank</th>
            <th className="th" style={{ width: "13.158vw" }}>
              Team
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Points
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Played
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Won
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Lose
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Draw
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              GF
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              GA
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              ND
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((team) => {
            const sign =
              team.all.goalsFor - team.all.goalsAgainst < 0 ? "-" : "+";
            return (
              <tr
                style={{
                  lineHeight: "5.0vw",
                  minHeight: "5.0vw",
                  height: "5.0vw",
                }}
                className="table-row"
              >
                <td>#{team.rank}</td>
                <td>
                  {" "}
                  <Image
                    src={team.logo}
                    style={{
                      height: "40px",
                      marginRight: "15px",
                      marginLeft: "5px",
                    }}
                    roundedCircle
                  />
                  {team.teamName}
                </td>
                <td>{team.points}</td>
                <td>{team.all.matchsPlayed}</td>
                <td>{team.all.win}</td>
                <td>{team.all.lose}</td>
                <td>{team.all.draw}</td>
                <td>{team.all.goalsFor}</td>
                <td>{team.all.goalsAgainst}</td>
                <td
                  style={sign === "+" ? { color: "green" } : { color: "red" }}
                >
                  {sign}
                  {Math.abs(team.all.goalsFor - team.all.goalsAgainst)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
