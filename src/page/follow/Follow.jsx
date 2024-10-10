import { useState } from "react";
import Card from "./Components/Card";
import { RectangleButton } from "../../components/Buttons";
import "./Follow.css"

export const Follow = ({ listFollowers = [], listFollowing = [], rute }) => {
    const [displayList, setDisplayList] = useState(rute || "seguidos");
    return (
        <section className="follow-container">
            <nav className="follow-nav">
                <RectangleButton label="Seguidores" fn={() => setDisplayList("seguidores")} />
                <RectangleButton label="Seguidos" fn={() => setDisplayList("seguidos")} />
            </nav>
            <div>
                {displayList === "seguidos" ? listFollowers.map((item) => {
                    return (
                        <Card image={item.image} isFollowed={item.isFollowed} isFollowingUser={item.isFollowing} username={item.username} usertag={item.usertag} />
                    )
                }) : listFollowing.map((item) => {
                    return (
                        <Card image={item.image} isFollowed={true} username={item.username} usertag={item.usertag} />
                    )
                })}
            </div>
        </section>
    );
};