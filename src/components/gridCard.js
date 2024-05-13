const GridCard = (props) =>{
    return(
        <>
            <div className="col-md-4">
                <div className="card h-100">
                    <img src={props.img} className="card-img-top object-fit-fill rounded" width={400} height={300} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            {props.description}
                        </p>       
                    </div>
                    <div className="card-footer bg-white border-0">
                            <a href="#" className="btn btn-warning">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridCard;
