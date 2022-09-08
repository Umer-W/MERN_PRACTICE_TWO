import React, { useEffect } from "react";
const About = () => {
  let data;
  const [userData, setUserData] = React.useState({ name: "ali" });
  const [check, setCheck] = React.useState(false);
  const AboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      data = await res.json();
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      } else {
        setCheck(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    AboutPage();
  }, []);

  return (
    <div className="home">
      {check === true ? (
        <div className="info">
          <div className="child">
            <ul>
              <li>Name:</li>
              <li>Email:</li>
              <li>Phone:</li>
              <li>Class:</li>
              <li>Roll No:</li>
            </ul>
          </div>
          <div className="child">
            <ul>
              <li>{userData.name}</li>
              <li>{userData.email}</li>
              <li>{userData.phone}</li>
              <li>{userData.Class}</li>
              <li>{userData.rollno}</li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h2>sorry</h2>
          <h1>No one logged in </h1>
        </div>
      )}
    </div>
  );
};

export default About;
