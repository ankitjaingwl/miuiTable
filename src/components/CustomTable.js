import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

import AvtarImg from './avtarImg';
import Select from "./select";
import TextTooltip from "./tooltip";
import SnackbarNotification from "./snackbar"

export default function BasicEditingGrid() {
  const [snackbar, setSnackbar] = useState(false)
  const msgs = () => {
    setSnackbar(true);
  }

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        onCellEditStop={msgs}
      />
      <SnackbarNotification snackbar={snackbar} setSnackbar={setSnackbar} />
    </div>
  );
}

const columns = [
  {
    field: 'name', headerName: 'Name', width: 180, editable: true,
    renderCell: (params) => <AvtarImg child={params.row.child} source="#" name={params.row.name} />
  },
  {
    field: 'gender', headerName: 'Gender', width: 80, editable: true,
    renderCell: (params) => <Select value={params.row.gender} />
  },
  {
    field: 'dateCreated',
    headerName: 'Birth',
    type: 'date',
    width: 100,
    editable: true,
  },
  {
    field: 'birthLocation',
    headerName: 'Birth Location',
    width: 100,
    editable: true,
    renderCell: (params) => <TextTooltip value={params.row.birthLocation} />
  },
  {
    field: 'death',
    headerName: 'Death',
    width: 100,
    type: 'date',
    editable: true,
  },
  {
    field: 'deathLocation',
    headerName: 'Death Location',
    width: 100,
    editable: true,
    renderCell: (params) => <TextTooltip value={params.row.deathLocation} />
  },
  {
    field: 'marriage',
    headerName: 'Marriage',
    width: 100,
    type: 'date',
    editable: true,
  },
  {
    field: 'spouse',
    headerName: 'Spouse',
    width: 100,
    editable: true,
    renderCell: (params) => <TextTooltip value={params.row.spouse} />
  },
];

const rows = [
  {
    id: 1,
    gender: "male",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Delhi",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Noida",
    spouse: randomTraderName(),
  },
  {
    id: 2,
    gender: "female",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Agra",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Delhi",
    spouse: randomTraderName(),
  },
  {
    id: 3,
    gender: "male",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Meerut",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Agra",
    spouse: randomTraderName(),
    child: true
  },
  {
    id: 4,
    gender: "female",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Noida",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Chandigarh",
    spouse: randomTraderName(),
    child: true
  },
  {
    id: 5,
    gender: "male",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Lucknow",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Goa",
    spouse: randomTraderName(),
  },
  {
    id: 6,
    gender: "male",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Delhi",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Noida",
    spouse: randomTraderName(),
    child: true
  },
  {
    id: 7,
    gender: "female",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Agra",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Delhi",
    spouse: randomTraderName(),
  },
  {
    id: 8,
    gender: "male",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Meerut",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Agra",
    spouse: randomTraderName(),
  },
  {
    id: 9,
    gender: "female",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Noida",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Chandigarh",
    spouse: randomTraderName(),
    child: true
  },
  {
    id: 10,
    gender: "male",
    name: randomTraderName(),
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    birthLocation: "Lucknow",
    death: randomUpdatedDate(),
    marriage: randomUpdatedDate(),
    deathLocation: "Goa",
    spouse: randomTraderName(),
  },
];