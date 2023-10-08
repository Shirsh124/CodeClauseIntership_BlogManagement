import React from "react";
import { categories } from "../../constants/data";
import { Link,useSearchParams } from "react-router-dom";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  styled,
} from "@mui/material";

const StyleTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;
const StyleButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background-color: #6495ed;
  color: #fff;
`;
const StyleLink = styled(Link)`
  text-decoration:none;
  color:inherit;
`
const Categories = () => {
  const [searchParams] = useSearchParams();
  const category=searchParams.get('category');
  return (
    <>
      <StyleLink to={`/create?category=${category || ''}`}>
        <StyleButton variant="contained">Create Blog</StyleButton>
      </StyleLink>
      <StyleTable>
        <TableHead>
          <TableRow>
            <StyleLink to="/">
              <TableCell>All Categories</TableCell>
            </StyleLink>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <StyleLink to={`/?category=${category.type}`}>
                <TableCell>{category.type}</TableCell>
              </StyleLink>
            </TableRow>
          ))}
        </TableBody>
      </StyleTable>
    </>
  );
};

export default Categories;
