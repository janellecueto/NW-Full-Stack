import React from "react"

function HelloBootstrap(){
    return(
        <div>
            <nav class="navbar"></nav>
            <div class="jumbotron">
                <h1>I am a jumbotron :)</h1>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
        </div>
    );
}

function HelloNavbar(){
    return (
        <nav class="navbar"></nav>
    );
}

function HelloJumbotron(){
    return (
        <div class="jumbotron">
            <h1>I am a jumbotron :)</h1>
        </div>
    );
}

function HelloCard(){
    return (
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export {HelloBootstrap, HelloNavbar, HelloJumbotron, HelloCard}