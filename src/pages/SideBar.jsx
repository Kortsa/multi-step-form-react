import { Outlet, Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="big-container">
      <div className="side-bar">
        <div className="content">
          <Link to='/'><div className="number">1</div></Link>
          <div>
            <h4>
              STEP 1 <br /> <span>YOUR INFO</span>
            </h4>
          </div>
        </div>
        <div className="content">
          <Link to='/plan'><div className="number">2</div></Link>
          <div>
            <h4>
              STEP 2 <br /> <span>SELECT PLAN</span>
            </h4>
          </div>
        </div>
        <div className="content">
          <Link to='/add'><div className="number">3</div></Link>
          <div>
            <h4>
              STEP 3 <br /> <span>ADD-ONS</span>
            </h4>
          </div>
        </div>
        <div className="content">
          <Link to='/summary'><div className="number">4</div></Link>
          <div>
            <h4>
              STEP 4 <br /> <span>SUMMARY</span>
            </h4>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideBar;
