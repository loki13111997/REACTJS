import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a class="navbar-brand" href="http://www.googl.com"target="_blank">Logo</a>
                    <form class="form-inline" action="/action_page.php">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default Header
