import './App.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data : [
        {
          "id": 1372,
          "productID": "10001",
          "productName": "Test 1",
          "amount": "1000",
          "customerName" : "abc",
          "status": 0,
          "transactionDate": "2022-07-10 11:14:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 11:14:52"
       },
       {
          "id": 1373,
          "productID": "10002",
          "productName": "Test 2",
          "amount": "2000",
          "customerName" : "abc",
          "status": 0,
          "transactionDate": "2022-07-11 13:14:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 13:14:52"
       },
       {
          "id": 1374,
          "productID": "10001",
          "productName": "Test 1",
          "amount": "1000",
          "customerName" : "abc",
          "status": 0,
          "transactionDate": "2022-08-10 12:14:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 12:14:52"
       },
       {
          "id": 1375,
          "productID": "10002",
          "productName": "Test 2",
          "amount": "1000",
          "customerName" : "abc",
          "status": 1,
          "transactionDate": "2022-08-10 13:10:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 13:10:52"
       },
       {
          "id": 1376,
          "productID": "10001",
          "productName": "Test 1",
          "amount": "1000",
          "customerName" : "abc",
          "status": 0,
          "transactionDate": "2022-08-10 13:11:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 13:11:52"
       },
       {
          "id": 1377,
          "productID": "10002",
          "productName": "Test 2",
          "amount": "2000",
          "customerName" : "abc",
          "status": 0,
          "transactionDate": "2022-08-12 13:14:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 13:14:52"
       },
       {
          "id": 1378,
          "productID": "10001",
          "productName": "Test 1",
          "amount": "1000",
          "customerName" : "abc",
          "status": 0,
          "transactionDate": "2022-08-12 14:11:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 14:11:52"
       },
       {
          "id": 1379,
          "productID": "10002",
          "productName": "Test 2",
          "amount": "1000",
          "customerName" : "abc",
          "status": 1,
          "transactionDate": "2022-09-13 11:14:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 11:14:52"
       },
       {
          "id": 1380,
          "productID": "10001",
          "productName": "Test 1",
          "amount": "1000",
          "customerName" : "abc",
          "status": 0,
          "transactionDate": "2022-09-13 13:14:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 13:14:52"
       },
       {
          "id": 1381,
          "productID": "10002",
          "productName": "Test 2",
          "amount": "2000",
          "customerName" : "abc",
          "status": 0,
          "transactionDate": "2022-09-14 09:11:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 09:11:52"
       },
       {
          "id": 1382,
          "productID": "10001",
          "productName": "Test 1",
          "amount": "1000",
          "customerName" : "abc",
          "status": 0,
          "transactionDate": "2022-09-14 10:14:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 10:14:52"
       },
       {
          "id": 1383,
          "productID": "10002",
          "productName": "Test 2",
          "amount": "1000",
          "customerName" : "abc",
          "status": 1,
          "transactionDate": "2022-08-15 13:14:52",
          "createBy" : "abc",
          "createOn" : "2022-07-10 13:14:52"
       },
      ],
      status : [
        {
          "id" : 0,
          "name" : "SUCCESS"
        },
        {
          "id" : 1,
          "name" : "FAILED"
        }
      ]
    }
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className='container'>
            <div className="row py-5">
              <div className="col-12 text-center">
                <h1>Transactions.id</h1>
                <hr className="w-75 mx-auto" />
              </div>
            </div>

            <div className="row">
              <div className="col border fw-bold">id</div>
              <div className="col border fw-bold">productid</div>
              <div className="col border fw-bold">productName</div>
              <div className="col border fw-bold">amount</div>
              <div className="col border fw-bold">customerName</div>
              <div className="col border fw-bold">status</div>
              <div className="col border fw-bold">transactionDate</div>
              <div className="col border fw-bold">options</div>
            </div>
            {
              this.state.data.map((getTrans, index) => {
                return (
                  <div key={index} className="row">
                    <div className="col border">{getTrans.id}</div>
                    <div className="col border">{getTrans.productID}</div>
                    <div className="col border">{getTrans.productName}</div>
                    <div className="col border">{getTrans.amount}</div>
                    <div className="col border">{getTrans.customerName}</div>
                    <div className="col border">{getTrans.status}</div>
                    <div className="col border">{getTrans.transactionDate}</div>
                    <div className="col border d-flex justify-content-center align-items-center">
                    <ModalCreate variant="me-2" icon="bi bi-pencil-square" modalheading="Edit Data: " modalsubheading={getTrans.id}/><button><i className="bi bi-search"></i></button>
                    </div>
                  </div>
                )
              })
            }
            <div className="row py-5">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h4>Transaction Details</h4>
                <div className="wrapper-button d-flex">
                  <ModalCreate variant="border border-0 px-3 py-2" text="Add Data" icon="bi bi-plus-circle-fill" modalheading="Add Data" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

class ModalCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      show : false,
      productID : '',
      productName : '',
      amount : '',
      customerName : '',
      transactionDate : ''
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    this.setState({
      show : false
    })
  }

  handleShow() {
    this.setState({
      show : true
    })
  }

  handleChange(e) {
    this.setState ({
      [e.target.name] : e.target.value
    })

    console.log(this.state)
  }

  render() {
    return (
      <>
        <button onClick={this.handleShow} className={this.props.variant}>{this.props.text} <i className={this.props.icon}></i></button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalheading}</Modal.Title>
            <Modal.Title>{this.props.modalsubheading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label className="form-label">Product ID</label>
              <input type="text" className="form-control" placeholder="Insert Product ID" name="productID" value={this.state.productID} onChange={this.handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input type="text" className="form-control" placeholder="Insert Product Name" name="productName" value={this.state.productName} onChange={this.handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input type="number" className="form-control" placeholder="Insert Amount" name="amount" value={this.state.amount} onChange={this.handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Customer Name</label>
              <input type="text" className="form-control" placeholder="Insert Customer Name" name="customerName" value={this.state.customerName} onChange={this.handleChange}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Transaction Date</label>
              <input type="datetime-local" className="form-control" placeholder="Insert Date" name="transactionDate" value={this.state.transactionDate} onChange={this.handleChange}/>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleClose}>Commit</button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default App;
