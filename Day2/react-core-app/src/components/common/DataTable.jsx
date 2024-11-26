const Th = ({ item }) => {
    var allHeads = Object.keys(item).concat("", "actions", "");

    var ths = allHeads.map((head, index) => {
        return <th key={index}>{head.toUpperCase()}</th>;
    });

    return (
        <tr>
            {ths}
        </tr>
    );
};

const Tr = ({ item }) => {
    var allValues = Object.values(item).concat(
        <a href="/#" className="text-primary">Details</a>,
        <a href="/#" className="text-warning">Edit</a>,
        <a href="/#" className="text-danger">Delete</a>
    );

    var tds = allValues.map((item, index) => {
        return <td key={index}>{item}</td>;
    });

    return (
        <tr>
            {tds}
        </tr>
    );
};

const DataTable = ({ items, children }) => {
    if (items && items.length) {
        var [item] = items;
        var headers = <Th item={item} />;
        var trs = items.map((item, index) => {
            return <Tr key={item.id} item={item} />;
        });
    }

    return (
        <>
            {children}
            <hr />
            <table className="table table-striped">
                <thead>
                    {headers}
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </>
    );
};

export default DataTable;