import React from "react";
import Auxx from "../../hoc/Auxx"

function Layout(props) {
    return (
        <Auxx>
            <main>
                {props.children}
            </main>
        </Auxx>
    )
}

export default Layout;