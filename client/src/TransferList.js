import React from 'react';

function TransferList({transfers, createTransfer}) {
    return (
        <div>
            <h2>Transfers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>To</th>
                        <th>approvals</th>
                        <th>sent</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers.map(transfer => (
                        <tr key = {transfer.id}>
                            <td>{transfer.amount}</td>
                            <td>{transfer.to}</td>
                            <td>
                                {transfer.approvals}
                                <button onClick={()=> createTransfer(transfer.id)}>Approve</button>
                            </td>
                            <td>{transfer.sent ? 'yes' : 'no'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransferList;