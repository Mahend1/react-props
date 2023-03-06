import React from 'react'

export default function Baby(props) {
    const { value } = props;
    let array = [];
    array = value;
    return (
        <div>

            {/* <button type='button' onClick={props.ButtonIncrement}>plus</button>
        <p>{props.initialValue}</p>

      <button type='button' onClick={props.ButtonDecrement}>minus</button> */}
            <div className='container'>
                <table className='table  table-hover'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.Age}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
