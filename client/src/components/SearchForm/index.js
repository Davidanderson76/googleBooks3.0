import React from "react";
import "./SearchForm.css";

const SearchForm = props => {
    return (
        <form>
            <div className = "form-goup">
                <label className = "BookSearchLabel">
                    <h3>
                        Search for Books!
                    </h3>
                </label>
                <br></br>
                <input className = "col-12 form-control"
                    value = { props.search }
                    type = "text"
                    name = "searchBook"
                    placeholder = "Enter the name of a book"
                    onChange = { props.handleInputChange } />
            </div>
            <br></br>
            <button type = "submit" className = "submitBtn btn btn-primary" onClick = { props.handleFormSubmit }>
                Submit
            </button>
        </form>
    )
}

export default SearchForm;