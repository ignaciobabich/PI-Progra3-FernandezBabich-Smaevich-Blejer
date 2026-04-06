import React from "react";
import Card from "../Card/Card";

function SeccionPeliculas() {
    return(
        <div>
            <h2 class="alert alert-primary">Popular movies this week</h2>
                <section class="row cards" id="movies">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                </section>
        </div>
    )
}
export default SeccionPeliculas