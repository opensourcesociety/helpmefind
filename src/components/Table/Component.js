import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import MUITable from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

import useStyles from './styles';

const paginationSteps = [10, 25, 50, 100];

function Table(props) {
  const {
    data,
    columns,
    hoverRow,
    onRowClick,
    stickyHeader,
  } = props;

  const classes = useStyles();
  const [page] = useState(0);
  const [rowsPerPage] = useState(paginationSteps[2]);

  const rows = useMemo(() => {
    return data.map((row, index) => {
      const rowData = { id: row.id };
      columns.forEach(column => {
        rowData[column.name] = column.getValue
          ? column.getValue(row, index)
          : row[column.name];
      });

      return rowData;
    });
  }, [data, columns]);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <MUITable
          stickyHeader={stickyHeader}
        >
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={column.id || index}
                  align={column.align || 'left'}
                  style={{
                    minWidth: column.minWidth || 'auto',
                    maxWidth: column.maxWidth || 'auto',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ id, ...row }, index) => {
                return (
                  <TableRow
                    tabIndex={-1}
                    hover={hoverRow}
                    key={id || index}
                    onClick={() => onRowClick({ id, ...row }, index)}
                  >
                    {Object
                      .values(row)
                      .map((rowData, index) => {
                        return (
                          <TableCell
                            key={index}
                            align={columns[index].align || 'left'}
                          >
                            {rowData}
                          </TableCell>
                        );
                      })}
                  </TableRow>
                );
              })}
          </TableBody>
        </MUITable>
      </TableContainer>
    </Paper>
  );
}

Table.defaultProps = {
  hoverRow: true,
  stickyHeader: true,
};

Table.propTypes = {
  hoverRow: PropTypes.bool,
  stickyHeader: PropTypes.bool,
};

export default Table;
