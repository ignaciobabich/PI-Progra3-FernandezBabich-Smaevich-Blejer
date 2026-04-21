import React from "react";

function Loader() {
    return (
        <div className="text-center my-4">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Cargando...</span>
            </div>
            <p className="mt-2">Cargando...</p>
        </div>
    )
}

export default Loader;
