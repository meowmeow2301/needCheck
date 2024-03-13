'use client'
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Col, Row } from 'react-bootstrap';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './todayContest.module.css'
import DynamicTable from "/Users/Admin/Documents/hocReact/nextJs/app-new/src/components/table/DynamicTable"


const Facebook = () => {
    const rowCount = 5;
    const buttonHanndler = () =>{
        alert('enter button is workinggg!');
    }
    return (
        <div>
            <Row>

                <Col xs={9}>
                    <h1 className='mt-5 pt-5'>Dynamic Table</h1>
                    <DynamicTable rowCount={rowCount} ></DynamicTable>
                </Col>
                <Col xs={3}>
                    <h3 className='mt-5 pt-5 text-primary'>Nhập mã phòng</h3>
                    <div>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Nhập mã"
                                aria-label="Input field"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="primary" id="button-addon2" onClick={buttonHanndler} >
                                enter
                            </Button>
                        </InputGroup>
                        <i> Điền mã phòng thi để vào phòng thi ngay</i>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Facebook;