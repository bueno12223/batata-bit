import React,{useState} from 'react'
import { connect } from 'react-redux';

import './styles/cardStatics.css';
function cardStatics(props) {
    const {userPersonalData: {goals}} = props;
    let progress = []
    if(goals.length != 0){
        goals.forEach(e => {
            let total = e.ammount / e.goal * 100;
            progress.push(total)
        });
    }
    
    
    return (
        <div className='statics_container'>
            <h3 className='statics_title'>Estadísticas de usuario</h3>
            <div className="statics_barsContainer">
                <div className="statics_bar">
                    <span className="statics_barIcon">
                        <i className="fas fa-camera"></i>
                    </span>
                    <div className="statics_barProgesiveContainer">
                        <div className="statics_barProgresive">
                            <div style={{width: `${progress[0] || 0}%` }} className="statics_barProgresiveFill" id='one'></div>
                        </div>
                        <p className='statics-barProgresiveDescription'>{goals.length != 0 ? goals[0].title : "No tienes una meta que seguir "}</p>
                    </div>
                </div>
                <div className="statics_bar">
                <svg className='statics_barIcon' id='twoV' width="30" height="30" viewBox="0 0 13 13" fill="#DDF9E4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.1053 11.8412C5.38146 11.8412 5.60533 11.6174 5.60533 11.3412C5.60533 11.0651 5.38146 10.8412 5.1053 10.8412C4.82915 10.8412 4.60528 11.0651 4.60528 11.3412C4.60528 11.6174 4.82915 11.8412 5.1053 11.8412Z" stroke="#F8964C" stroke-width="0.996054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.6052 11.8412C10.8814 11.8412 11.1052 11.6174 11.1052 11.3412C11.1052 11.0651 10.8814 10.8412 10.6052 10.8412C10.329 10.8412 10.1052 11.0651 10.1052 11.3412C10.1052 11.6174 10.329 11.8412 10.6052 11.8412Z" stroke="#F8964C" stroke-width="0.996054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.10449 1.34033H3.1046L4.44467 8.03569C4.4904 8.2659 4.61564 8.4727 4.79847 8.61987C4.98129 8.76705 5.21006 8.84523 5.44473 8.84074H10.305C10.5397 8.84523 10.7684 8.76705 10.9513 8.61987C11.1341 8.4727 11.2593 8.2659 11.305 8.03569L12.1051 3.84047H3.60463" stroke="#F8964C" stroke-width="0.996054" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <div className="statics_barProgesiveContainer">
                        <div className="statics_barProgresive">
                            <div style={{width: `${progress[1] || 0}%`}} className="statics_barProgresiveFill" id='two'></div>
                        </div>
                        <p className='statics-barProgresiveDescription'>{goals.length != 0 ? goals[1].title : "No tienes una meta que seguir "}</p>
                    </div>
                </div>
                <div className="statics_bar">
                <svg className='statics_barIcon' id='threeV' width="30" height="30" viewBox="0 0 13 13" fill="#E4F0FF" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.1053 11.8412C5.38146 11.8412 5.60533 11.6174 5.60533 11.3412C5.60533 11.0651 5.38146 10.8412 5.1053 10.8412C4.82915 10.8412 4.60528 11.0651 4.60528 11.3412C4.60528 11.6174 4.82915 11.8412 5.1053 11.8412Z" stroke="#F8964C" stroke-width="0.996054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.6052 11.8412C10.8814 11.8412 11.1052 11.6174 11.1052 11.3412C11.1052 11.0651 10.8814 10.8412 10.6052 10.8412C10.329 10.8412 10.1052 11.0651 10.1052 11.3412C10.1052 11.6174 10.329 11.8412 10.6052 11.8412Z" stroke="#F8964C" stroke-width="0.996054" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.10449 1.34033H3.1046L4.44467 8.03569C4.4904 8.2659 4.61564 8.4727 4.79847 8.61987C4.98129 8.76705 5.21006 8.84523 5.44473 8.84074H10.305C10.5397 8.84523 10.7684 8.76705 10.9513 8.61987C11.1341 8.4727 11.2593 8.2659 11.305 8.03569L12.1051 3.84047H3.60463" stroke="#F8964C" stroke-width="0.996054" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <div className="statics_barProgesiveContainer">
                        <div className="statics_barProgresive">
                            <div style={{width: `${progress[2] || 0}%` }} className="statics_barProgresiveFill" id='three'></div>
                        </div>
                        <p className='statics-barProgresiveDescription'>{goals.length != 0 ? goals[2].title : "No tienes una meta que seguir "}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
const mapStateToProps = state => {
    return{
        userPersonalData: {
            goals: state.userPersonalData.goals
        }
    }
}
export default connect(mapStateToProps, null)(cardStatics);
