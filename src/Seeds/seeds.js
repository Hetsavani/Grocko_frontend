function SeedList(){
    const temp = [
        {
            seedId:{type:Number,index:true,unique:true},
            seed_name : "seedName",
            seed_type : "seedType",
            quality_grade:"A",
            price_per_unit : "pricePerUnit"
        }
    ]
    const formattedSeeds = temp.map((item)=>{
        return (
            <div class="row">
                <div class="row">
                <div className="col-6">{item.seed_name}</div>
                <div className="col-6">{item.quality_grade}</div>
                </div>
                <div class="row">
                <div className="col-6">{item.seedName}</div>
                <div className="btn btn-primary col-6">Apply</div>
                </div>
                <div></div>
            </div>
        );
    })
    return(
        <>
        {formattedSeeds}
        </>
    );
}
export default SeedList;