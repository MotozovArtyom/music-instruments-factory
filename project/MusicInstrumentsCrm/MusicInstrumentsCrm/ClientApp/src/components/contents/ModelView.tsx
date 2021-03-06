import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Model from "../../domain/Model";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface ModelViewProps extends RouteComponentProps {

}

export interface ModelViewState {
    modelList: Array<Model>;
}

export default class ModelView extends React.Component<ModelViewProps, ModelViewState> {

    constructor(props: ModelViewProps) {
        super(props, {});
        this.state = {
            modelList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Model');
        xhr.onload = (evt) => {
            let res: Array<Model> = JSON.parse(xhr.responseText);
            this.setState({ modelList: res })
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }
    handleRowClick(event: React.MouseEvent) {
        let id: string | null = null;
        if (event.currentTarget != null) {
            id = event.currentTarget.getAttribute('data-id');
        }
        if (!Strings.isNullOrEmpty(id)) {
            this.props.history.push(`/index/Model/edit/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/ModelAdd"><button className="btn-content">Add</button></Link>
                
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название модели</th>
                        <th>Марка</th>
                        <th>Год</th>
                    </tr>
                    {
                        this.state.modelList.map((el: Model) => {
                            return <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
                                <td>{el.id}</td>
                                <td>{el.modelName}</td>
                                <td>{el.mark.name}</td>
                                <td>{el.year}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}