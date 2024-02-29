import React from "react";
import Header from "../Header";
import Accordion from "../Accordion";
import BackButton from "../BackButton";
import './Polar.css';

// Files
// Tests
import blankTest_2022 from "../documents/Polar/2022_Test_Blank.pdf";

import rawTest_2013 from "../documents/Polar/2013_Test_Raw.pdf";
import rawTest_2022 from "../documents/Polar/2022_Test_Raw.pdf";
import rawTest_2023 from "../documents/Polar/2023_Test_Raw.pdf";
// Quizzes
import blankQuiz_3d1_2016 from "../documents/Polar/2016_Quiz_3d1_Blank.pdf";
import blankQuiz_polar_2022 from "../documents/Polar/2022_Quiz_polar_Blank.pdf";

import rawQuiz_polar_2013 from "../documents/Polar/2013_Quiz_polar_Raw.pdf";
import rawQuiz_polar_2016 from "../documents/Polar/2016_Quiz_polar_Raw.pdf";
import rawQuiz_3d1_2016 from "../documents/Polar/2016_Quiz_3d1_Raw.pdf";
import rawQuiz_3d2_2016 from "../documents/Polar/2016_Quiz_3d2_Raw.pdf";
import rawQuiz_polar_2018 from "../documents/Polar/2018_Quiz_polar_Raw.pdf";
import rawQuiz_3d_2018 from "../documents/Polar/2018_Quiz_3d_Raw.pdf";
import rawQuiz_polar_2019 from "../documents/Polar/2019_Quiz_polar_Raw.pdf";
import rawQuiz_3d_2019 from "../documents/Polar/2019_Quiz_3d_Raw.pdf";
import rawQuiz1_2021 from "../documents/Polar/2021_Quiz1_Raw.pdf";
import rawQuiz2_2021 from "../documents/Polar/2021_Quiz2_Raw.pdf";
import rawQuiz_polar_2022 from "../documents/Polar/2022_Quiz_polar_Raw.pdf";
import rawQuiz_2023 from "../documents/Polar/2023_Quiz_Raw.pdf";


const resources = [
    {
        url: "/tests",
        text: "Tests",
        options: [
            {
                url: "/tests/blanked",
                text: "Blanked",
                options: [
                    {
                        text: "2022 Test (Blanked)",
                        url: blankTest_2022
                    }
                ]
            },
            {
                url: "/tests/raw",
                text: "Raw",
                options: [
                    {
                        text: "2013 Test (Raw)",
                        url: rawTest_2013
                    },
                    {
                        text: "2022 Test (Raw)",
                        url: rawTest_2022
                    },
                    {
                        text: "2023 Test (Raw)",
                        url: rawTest_2023
                    }
                ]
            }
        ]
    },
    {
        url: "/quizzes",
        text: "Quizzes",
        options: [
            {
                url: "/quizzes/blanked",
                text: "Blanked",
                options: [
                    {
                        text: "2016 3D Quiz 1 (Blanked)",
                        url: blankQuiz_3d1_2016
                    },
                    {
                        text: "2022 Polar Quiz (Blanked)",
                        url: blankQuiz_polar_2022
                    }
                ]
            },
            {
                url: "/quizzes/raw",
                text: "Raw",
                options: [
                    {
                        text: "2013 Polar Quiz (Raw)",
                        url: rawQuiz_polar_2013
                    },
                    {
                        text: "2016 Polar Quiz (Raw)",
                        url: rawQuiz_polar_2016
                    },
                    {
                        text: "2016 3D Quiz 1 (Raw)",
                        url: rawQuiz_3d1_2016
                    },
                    {
                        text: "2016 3D Quiz 2 (Raw)",
                        url: rawQuiz_3d2_2016
                    },
                    {
                        text: "2018 Polar Quiz (Raw)",
                        url: rawQuiz_polar_2018
                    },
                    {
                        text: "2018 3D Quiz (Raw)",
                        url: rawQuiz_3d_2018
                    },
                    {
                        text: "2019 Polar Quiz (Raw)",
                        url: rawQuiz_polar_2019
                    },
                    {
                        text: "2019 3D Quiz (Raw)",
                        url: rawQuiz_3d_2019
                    },
                    {
                        text: "2021 Polar Quiz 1 (Raw)",
                        url: rawQuiz1_2021
                    },
                    {
                        text: "2021 Polar Quiz 2 (Raw)",
                        url: rawQuiz2_2021
                    },
                    {
                        text: "2022 Polar Quiz (Raw)",
                        url: rawQuiz_polar_2022
                    },
                    {
                        text: "2023 Quiz (Raw)",
                        url: rawQuiz_2023
                    }
                ]
            }
        ]
    }
];

function Polar() {
    return (
        <div className="polar-and-3d">
            <Header headerTitle="POLAR AND 3D" description="Polar and 3D Graphing"/>
            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Polar;