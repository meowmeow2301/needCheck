import { Table } from 'react-bootstrap';

interface RowCountProps {
    rowCount: number;
  }
  
  const DynamicTable = ({ rowCount }: RowCountProps) => {
    const renderTableRows = () => {
        const rows = [];
        for (let i = 1; i <= rowCount; i++) {
            rows.push(
                <tr key={i}>
                    <td>{i}</td>
                    <td>cot 2 + {i}</td>
                    <td>cot 3 + {i}</td>
                </tr>
            );
        }
        return rows;
    };

    return (
        <Table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên môn thi</th>
                    <th>Thời gian</th>
                </tr>
            </thead>
            <tbody>
                {renderTableRows()}
            </tbody>
        </Table>
    );
};

export default DynamicTable;