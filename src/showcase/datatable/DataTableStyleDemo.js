import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableStyleDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.yearTemplate = this.yearTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    yearTemplate(rowData) {
        let year = rowData.year;
        let fontWeight = year > 2010 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{rowData.year}</span>;
    }

    rowClassName(rowData) {
        let brand = rowData.brand;

        return {'p-highlight' : (brand === 'Jaguar')};
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Styling</h1>
                        <p>Particular rows and cells can be styled based on data.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <p>This datatable highlights cell with a bolder font weight whose year value is greater than 2010 and highlights rows whose brand is a Jaguar.</p>
                    <DataTable value={this.state.cars} rowClassName={this.rowClassName}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" body={this.yearTemplate} />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableStyleDemoDoc></DataTableStyleDemoDoc>
            </div>
        );
    }
}

export class DataTableStyleDemoDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class DataTableStyleDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.yearTemplate = this.yearTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    yearTemplate(rowData) {
        let year = rowData.year;
        let fontWeight = year > 2010 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{rowData.year}</span>;
    }

    rowClassName(rowData) {
        let brand = rowData.brand;

        return {'p-highlight' : (brand === 'Jaguar')};
    }

    render() {
        return (
            <div>
                <p>This datatable highlights cell with a bolder font weight whose year value is greater than 2010 and highlights rows whose brand is a Jaguar.</p>
                <DataTable value={this.state.cars} rowClassName={this.rowClassName}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" body={this.yearTemplate} />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableStyleDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const yearTemplate = (rowData) => {
        let year = rowData.year;
        let fontWeight = year > 2010 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{rowData.year}</span>;
    };

    const rowClassName = (rowData) => {
        let brand = rowData.brand;

        return {'p-highlight' : (brand === 'Jaguar')};
    };

    return (
        <div>
            <p>This datatable highlights cell with a bolder font weight whose year value is greater than 2010 and highlights rows whose brand is a Jaguar.</p>
            <DataTable value={cars} rowClassName={rowClassName}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" body={yearTemplate} />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableStyleDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const yearTemplate = (rowData: any) => {
        let year = rowData.year;
        let fontWeight: any = year > 2010 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{rowData.year}</span>;
    };

    const rowClassName = (rowData: any) => {
        let brand = rowData.brand;

        return {'p-highlight' : (brand === 'Jaguar')};
    };

    return (
        <div>
            <p>This datatable highlights cell with a bolder font weight whose year value is greater than 2010 and highlights rows whose brand is a Jaguar.</p>
            <DataTable value={cars} rowClassName={rowClassName}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" body={yearTemplate} />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datatable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="DataTableStyleDemo" sources={this.sources} service="CarService" data="cars-small" activeButtonIndex={this.state.activeIndex} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
