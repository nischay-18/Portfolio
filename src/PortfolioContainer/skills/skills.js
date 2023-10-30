import React from "react";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import PythonLogo from '../../assets/icons/python.svg';
import RLogo from '../../assets/icons/r.svg';
import TableauLogo from '../../assets/icons/tableau.svg';
import PowerbiLogo from '../../assets/icons/powerbi.svg';
import SklearnLogo from '../../assets/icons/scikitlearn.svg';
import PandasLogo from '../../assets/icons/pandas.svg';
import NumpyLogo from '../../assets/icons/numpy.svg';
import AWSLogo from '../../assets/icons/aws.svg'; // This path seems to be the same as ScikitLearn, please correct it if needed.
import MongoDBLogo from '../../assets/icons/mongodb.svg';
import MySQLLogo from '../../assets/icons/mysql.svg';
import TensorflowLogo from '../../assets/icons/tensorflow.svg';
import PytorchLogo from '../../assets/icons/pytorch.svg';
import StatisticsLogo from '../../assets/icons/statistics1.svg';
import TimeseriesLogo from '../../assets/icons/timeseries.svg';
import JavaLogo from '../../assets/icons/java.svg';
import JavascriptLogo from '../../assets/icons/javascript.svg';
import GitLogo from '../../assets/icons/git.svg';
import NodejsLogo from '../../assets/icons/nodejs.svg';
import ReactLogo from '../../assets/icons/react.svg';
import HadoopLogo from '../../assets/icons/hadoop.svg';
import PysparkLogo from '../../assets/icons/pyspark.svg';
import ExcelLogo from '../../assets/icons/excel.svg';
import AzureLogo from '../../assets/icons/azure.svg';
import "./skills.css";

export default function Skills(props) {
    const skillsList = [
        { name: "Python", logo: PythonLogo },
        { name: "R Programming", logo: RLogo },
        { name: "Tableau", logo: TableauLogo },
        { name: "PowerBI", logo: PowerbiLogo },
        { name: "ScikitLearn", logo: SklearnLogo },
        { name: "Pandas", logo: PandasLogo },
        { name: "Numpy", logo: NumpyLogo },
        { name: "AWS", logo: AWSLogo },
        { name: "MongoDB", logo: MongoDBLogo },
        { name: "MySQL", logo: MySQLLogo },
        { name: "Tensorflow", logo: TensorflowLogo },
        { name: "Pytorch", logo: PytorchLogo },
        { name: "Statistics", logo: StatisticsLogo },
        { name: "Timeseries", logo: TimeseriesLogo },
        { name: "Java", logo: JavaLogo },
        { name: "Javascript", logo: JavascriptLogo },
        { name: "Git", logo: GitLogo },
        { name: "Node.js", logo: NodejsLogo },
        { name: "React", logo: ReactLogo },
        { name: "Hadoop", logo: HadoopLogo },
        { name: "PySpark", logo: PysparkLogo },
        { name: "Excel", logo: ExcelLogo },
        { name: "Azure", logo: AzureLogo },
    ];

    return (
      <div className="skills-main-container" id={props.id || ""}>
        <ScreenHeading subHeading={""} title={"Skills"} />

        <div className="skills-central-form container">
            {skillsList.map(skill => (
                <div className="skills-skill-item" key={skill.name}>
                    <img src={skill.logo} alt={skill.name} className="skills-skill-logo" />
                    {skill.name}
                </div>
            ))}
        </div>
      </div>
    );
}