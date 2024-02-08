import React from "react";
import Header from "../Header";
import Accordion from "../Accordion";
import BackButton from "../BackButton";
import './Matrices.css';

// Files
// Tests
// Quizzes

const resources = [];

function Matrices() {
    return (
        <div className="Matrices">
            <Header headerTitle="MATRICES" description="Matrices and Determinants"/>

            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Matrices;