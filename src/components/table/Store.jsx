import './list.scss'
import SearchFile from '../common/search/SearchFile';



const Store = () => {

    const toolList = [
        {
            code:'01',
            spareparts: 'rodamiento para eje motriz',
            quantity: '34',
            location: 'a-01'
        },
        {
            code:'02',
            spareparts: 'piston',
            quantity: '46',
            location: 'b-10'
        },
        {
            code:'03',
            spareparts: 'freno',
            quantity: '12',
            location: 'b-15'
        },
    ]

    return (
        <>
            <div className="container col-12 sec-filter">
                <SearchFile />
            </div>

            <div className="container">
                <div className='table-responsive'>
                    <table className="table table-hover table-striped text-center w-90 m-auto " >
                        <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Spare Parts</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Location</th>
                            </tr>
                        </thead>

                        <tbody>
                            {toolList.map((t) => <tr key={t.code}>
                                                    <td>{t.code}</td>
                                                    <td>{t.spareparts}</td>
                                                    <td>{t.quantity}</td>
                                                    <td>{t.location}</td>
                                                </tr>
                            )}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Store;
