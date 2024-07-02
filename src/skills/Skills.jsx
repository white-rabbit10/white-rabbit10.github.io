import React from "react";
import { styles } from "../commons/commonStyles";
import NavBar from "../navbar/NavBar";
import Skill from "./Skill";
import { useInView } from "react-intersection-observer";
import './Skills.css';
import CIcon from '../images/cPlusPlus.svg';
import JavaIcon from '../images/java.svg';
import CSharpIcon from '../images/cSharp.svg';
import PythonIcon from '../images/python.svg';
import ReactIcon from '../images/react.svg';
import JavascriptIcon from '../images/javascript.svg';
import AngularIcon from '../images/angular.svg';
import HtmlIcon from '../images/html.svg';
import CssIcon from '../images/css.svg';
import DotnetIcon from '../images/dotnet.svg';
import AwsIcon from '../images/aws.svg';
import AzureIcon from '../images/azure.svg';
import GitIcon from '../images/git.svg';
import MySQLIcon from '../images/mysql.svg';
import MongodbIcon from '../images/mongo.svg';
import DynamodbIcon from '../images/dynamodb.svg';
import RedisIcon from '../images/redis.svg';
import JenkinsIcon from '../images/jenkins.svg';

const skillsData = [
    { id: 1, source: CIcon, alt: "The logo icon for C++", title: "C++" },
    { id: 2, source: JavaIcon, alt: "The logo icon for Java", title: "Java" },
    { id: 3, source: CSharpIcon, alt: "The logo icon for C#", title: "C#" },
    { id: 4, source: PythonIcon, alt: "The logo icon for python", title: "Python" },
    { id: 5, source: ReactIcon, alt: "The logo icon for React", title: "React" },
    { id: 6, source: JavascriptIcon, alt: "The logo icon for JavaScript", title: "JavaScript" },
    { id: 7, source: AngularIcon, alt: "The logo icon for Angular", title: "Angular" },
    { id: 8, source: HtmlIcon, alt: "The logo icon for HTML", title: "HTML" },
    { id: 9, source: CssIcon, alt: "The logo icon for CSS", title: "CSS" },
    { id: 10, source: AwsIcon, alt: "The logo icon for AWS", title: "AWS" },
    { id: 11, source: AzureIcon, alt: "The logo icon for Azure", title: "Azure" },
    { id: 12, source: GitIcon, alt: "The logo icon for Git", title: "Git" },
    { id: 13, source: MySQLIcon, alt: "The logo icon for MySQL", title: "MySQL" },
    { id: 14, source: MongodbIcon, alt: "The logo icon for MongoDB", title: "MongoDB" },
    { id: 15, source: DynamodbIcon, alt: "The logo icon for DynamoDB", title: "DynamoDB" },
    { id: 16, source: RedisIcon, alt: "The logo icon for Redis", title: "Redis" },
    { id: 17, source: JenkinsIcon, alt: "The logo icon for Jenkins", title: "Jenkins" },
    { id: 18, source: DotnetIcon, alt: "The logo icon for Dotnet", title: "Dotnet" },
];

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div>
            <NavBar />
            <div style={{ ...styles.common, marginTop: '55px' }}>
                <div className="container" style={{marginTop: '40px'}}>
                    <div className={`skillsGrid ${inView ? 'fadeIn' : ''}`} ref={ref}>
                        {skillsData.map((skill, index) => (
                            <Skill key={index} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
