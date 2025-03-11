
const Sidebar = () => {
    return (
        <div className="">
            <ul className="menu">
                <li><a>Dashboard</a></li>
                <li>
                    <details close>
                        <summary>Students</summary>
                        <ul>
                            <li><a>Add Students</a></li>
                            <li><a>All Students</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details close>
                        <summary>Teachers</summary>
                        <ul>
                            <li><a>Add Teacher</a></li>
                            <li><a>All Teachers</a></li>
                        </ul>
                    </details>
                </li>
            </ul>

        </div>
    );
};

export default Sidebar;