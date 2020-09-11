import React, { useCallback, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import MUITable from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';

import useStyles from './styles';

const paginationSteps = [10, 25, 50, 100];

function Table(props) {
  const {
    data,
    columns,
    onRowClick,
    stickyHeader,
  } = props;
  
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(paginationSteps[2]);

  const handleChangePage = useCallback((event, newPage) => {
    setPage(newPage);
  }, [setPage]);

  const handleChangeRowsPerPage = useCallback(event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }, [setRowsPerPage, setPage]);

  const rows = useMemo(() => {
    return data.map((row, index) => {
      const rowData = {};
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
              .map((row, index) => {
                return (
                  <TableRow
                    tabIndex={-1}
                    key={row.id || index}
                    onClick={() => onRowClick(row, index)}
                  >
                    {Object
                      .values(row)
                      .map((rowData, index) => {
                        return (
                          <TableCell
                            key={index}
                            align="center"
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
      <TablePagination
        page={page}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        rowsPerPageOptions={paginationSteps}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

Table.defaultProps = {
  stickyHeader: true,
};

Table.propTypes = {
  stickyHeader: PropTypes.bool,
};

export default Table;
