import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {ContextMenu} from '../../components/contextmenu/ContextMenu';
import {Growl} from '../../components/growl/Growl';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableContextMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            selectedCar: null
        };

        this.menu = [
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewCar(this.state.selectedCar)},
            {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteCar(this.state.selectedCar)}
        ];

        this.carservice = new CarService();
        this.viewCar = this.viewCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    viewCar(car) {
        this.growl.show({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
    }

    deleteCar(car) {
        let carsList = [...this.state.cars];
        carsList = carsList.filter((c) => c.vin !== car.vin);

        this.growl.show({severity: 'info', summary: 'Car Delete', detail: car.vin + ' - ' + car.brand});
        this.setState({
            cars: carsList
        });
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - ContextMenu</h1>
                        <p>DataTable has exclusive integration with ContextMenu.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => { this.growl = el; }}></Growl>

                    <ContextMenu model={this.menu} ref={el => this.cm = el} onHide={() => this.setState({selectedCar: null})}/>

                    <DataTable value={this.state.cars} header="Right Click"
                        contextMenuSelection={this.state.selectedCar} onContextMenuSelectionChange={e => this.setState({selectedCar: e.value})}
                        onContextMenu={e => this.cm.show(e.originalEvent)}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableContextMenuDemoDoc></DataTableContextMenuDemoDoc>
            </div>
        );
    }
}

export class DataTableContextMenuDemoDoc extends Component {

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
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {CarService} from '../service/CarService';

export class DataTableContextMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            selectedCar: null
        };

        this.menu = [
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewCar(this.state.selectedCar)},
            {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteCar(this.state.selectedCar)}
        ];

        this.carservice = new CarService();
        this.viewCar = this.viewCar.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    viewCar(car) {
        this.growl.show({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
    }

    deleteCar(car) {
        let carsList = [...this.state.cars];
        carsList = carsList.filter((c) => c.vin !== car.vin);

        this.growl.show({severity: 'info', summary: 'Car Delete', detail: car.vin + ' - ' + car.brand});
        this.setState({
            cars: carsList
        });
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => { this.growl = el; }}></Growl>

                <ContextMenu model={this.menu} ref={el => this.cm = el} onHide={() => this.setState({selectedCar: null})}/>

                <DataTable value={this.state.cars} header="Right Click"
                    contextMenuSelection={this.state.selectedCar} onContextMenuSelectionChange={e => this.setState({selectedCar: e.value})}
                    onContextMenu={e => this.cm.show(e.originalEvent)}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
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
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {CarService} from '../service/CarService';

const DataTableContextMenuDemo = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const menu = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewCar(selectedCar)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteCar(selectedCar)}
    ];

    const carservice = new CarService();
    let growl = useRef(null);
    let cm = useRef(null);

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewCar = (car) => {
        growl.current.show({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
    };

    const deleteCar = (car) => {
        let carsList = [...cars];
        carsList = carsList.filter((c) => c.vin !== car.vin);

        growl.current.show({severity: 'info', summary: 'Car Delete', detail: car.vin + ' - ' + car.brand});
        setCars(carsList);
    };

    return (
        <div>
            <Growl ref={growl}></Growl>

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedCar(null)}/>

            <DataTable value={cars} header="Right Click"
                contextMenuSelection={selectedCar} onContextMenuSelectionChange={e => setSelectedCar(e.value)}
                onContextMenu={e => cm.current.show(e.originalEvent)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
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
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {CarService} from '../service/CarService';

const DataTableContextMenuDemo = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const menu = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewCar(selectedCar)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteCar(selectedCar)}
    ];

    const carservice = new CarService();
    let growl = useRef<any>(null);
    let cm = useRef<any>(null);

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewCar = (car: any) => {
        growl.current.show({severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand});
    };

    const deleteCar = (car: any) => {
        let carsList: any = [...cars];
        carsList = carsList.filter((c) => c.vin !== car.vin);

        growl.current.show({severity: 'info', summary: 'Car Delete', detail: car.vin + ' - ' + car.brand});
        setCars(carsList);
    };

    return (
        <div>
            <Growl ref={growl}></Growl>

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedCar(null)}/>

            <DataTable value={cars} header="Right Click"
                contextMenuSelection={selectedCar} onContextMenuSelectionChange={e => setSelectedCar(e.value)}
                onContextMenu={e => cm.current.show(e.originalEvent)}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
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
                <LiveEditor name="DataTableContextMenuDemo" sources={this.sources} service="CarService" data="cars-small" activeButtonIndex={this.state.activeIndex} />
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
