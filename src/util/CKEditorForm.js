import React from "react";
import CKEditor from "react-ckeditor-component";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

class CK extends React.Component {
  onChange(evt) {
    const newContent = evt.editor.getData();
    this.props.setBody(newContent);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.sendPDF}>
          <CKEditor
            activeClass="p10"
            content={this.props.body}
            events={{
              change: this.onChange.bind(this)
            }}
          />
          <div className="p-3 col-md-12 col-12 d-flex flex-row-reverse">
            {!this.props.loadingSend ? (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="jr-btn jr-btn-lg"
              >
                Enviar
              </Button>
            ) : (
              <CircularProgress />
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default CK;
