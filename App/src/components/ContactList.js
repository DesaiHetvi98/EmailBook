import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const inputEl = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const randerContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id}> </ContactCard>
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);

    };

    return(
        <div class="main" style={{marginTop: "50px"}}>
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right" style={{marginLeft: "50px"}}>Add Details</button>
                </Link>               
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search Contact" className="prompt" value={ props.term } onChange={ getSearchTerm }/>
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui called list">          
                {randerContactList.length > 0 ? randerContactList : "No Contacts Available"}
            </div>
        </div>
    );
}
export default ContactList;