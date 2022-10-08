import React from 'react'

const PopupMessage = (props) => {
  return (
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <h4 className="modal-title">Delete {props.firstname}'s data</h4>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this employee data?</p>
          </div>
          <div className="modal-footer">
            {props.children}
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupMessage
