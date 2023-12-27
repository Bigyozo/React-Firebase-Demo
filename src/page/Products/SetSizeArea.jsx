import {
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { CheckCircle, Delete, Edit } from "@material-ui/icons";
import React, { useCallback, useState, useMemo } from "react";
import { TextInput } from "../component";

const useStyles = makeStyles({
  checkIcon: {
    float: "right"
  },
  iconCell: {
    height: 48,
    width: 48
  }
});

const SetSizeArea = (props) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0),
    [size, setSize] = useState(""),
    [quantity, setQuantity] = useState(0);

  const inputSize = useCallback(
    (event) => {
      setSize(event.target.value);
    },
    [setSize]
  );
  const inputQuantity = useCallback(
    (event) => {
      setQuantity(event.target.value);
    },
    [setQuantity]
  );

  const addSize = (index, size, quantity) => {
    if (size === "" || quantity === "") {
      return false;
    } else {
      if (index === props.sizes.length) {
        props.setSizes((prevState) => [...prevState, { size, quantity }]);
        setIndex(index + 1);
        setSize("");
        setQuantity(0);
      } else {
        const newSizes = props.sizes;
        newSizes[index] = { size, quantity };
        props.setSizes(newSizes);
        setIndex(newSizes.length);
        setSize("");
        setQuantity(0);
      }
    }
  };

  const editSize = (index, size, quantity) => {
    setIndex(index);
    setSize(size);
    setQuantity(quantity);
  };

  const deleteSize = (deleteIndex) => {
    const newSizes = props.sizes.filter((item, i) => i != deleteIndex);
    props.setSizes(newSizes);
  };

  const memoIndex = useMemo(() => {
    setIndex(props.sizes.length);
  }, [props.sizes.length]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>サイズ</TableCell>
              <TableCell>数量</TableCell>
              <TableCell className={classes.iconCell}></TableCell>
              <TableCell className={classes.iconCell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.sizes.length > 0 &&
              props.sizes.map((item, index) => (
                <TableRow key={item.size}>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <IconButton
                      className={classes.iconCell}
                      onClick={() => editSize(index, item.size, item.quantity)}
                    >
                      <Edit></Edit>
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton className={classes.iconCell} onClick={() => deleteSize(index)}>
                      <Delete></Delete>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TextInput
                fullWidth={false}
                label={"サイズ"}
                multiline={false}
                required={true}
                onChange={inputSize}
                rows={1}
                value={size}
                type={"text"}
              ></TextInput>
            </TableCell>
            <TableCell>
              <TextInput
                fullWidth={false}
                label={"数量"}
                multiline={false}
                required={true}
                onChange={inputQuantity}
                rows={1}
                value={quantity}
                type={"number"}
              ></TextInput>
            </TableCell>
            <TableCell>
              <IconButton
                className={classes.checkIcon}
                onClick={() => addSize(index, size, quantity)}
              >
                <CheckCircle></CheckCircle>
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
      </TableContainer>
    </div>
  );
};

export default SetSizeArea;
