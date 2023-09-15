import React from "react";
const Products = ({data}) =>{
    const handleclick= () =>{
        console.log("Thank you for choosing our website")
    }
    return (
        <div>
                <div className="row">
                {data.map(data =>  
                <div className="col-md-4">
                    <div class="card" style={{"width": "18rem"}}>
                    <img class="card-img-top" src={data.recipe.image} alt="Delicious chocolate cake" />
                    <div class="card-body">
                    <center>
                        <h5 class="card-title">{data.recipe.label}</h5>
                        <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                        <button onClick={handleclick} class='btn btn-primary smaller-button'>View Details </button>
                        </center>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Products;