function SeedList() {
  const temp = [
    {
      seedId: { type: Number, index: true, unique: true },
      seed_name: "seedName",
      seed_type: "seedType",
      quality_grade: "A",
      price_per_unit: "pricePerUnit",
    },
  ];

  const formattedSeeds = temp.map((item) => {
    return (
      <div class="row">
        <div class="row">
          <div
            class="row my-3 mx-auto"
            style={{
              borderRadius: "10px",
              backgroundColor: "#dddddd",
              width: "90vw",
              height: "10vh",
            }}
          >
            <div className="col-10">
              <div className="row">
                <div className="col" style={{ fontSize: "30px" }}>
                  {item.seed_name}
                </div>
              </div>
              <div className="row">
                <div className="col" style={{ fontSize: "15px" }}>
                  Type : {item.seed_type}
                </div>
                <div className="col" style={{ fontSize: "15px" }}>
                  Price : {item.price_per_unit}
                </div>
              </div>
            </div>
            <div className="col my-auto">
              <div className="btn btn-success">Details</div>
            </div>
            {/* <div class="row">
                <div className="col-6">{item.seed_name}</div>
                <div className="col-6">{item.quality_grade}</div>
                </div>
                <div class="row">
                <div className="col-6">{item.seedName}</div>
                <div className="btn btn-primary col-6">Apply</div>
                </div>
                </div> */}
            <div></div>
          </div>
        </div>
      </div>
    );
  });
  return <>{formattedSeeds}</>;
}
export default SeedList;
