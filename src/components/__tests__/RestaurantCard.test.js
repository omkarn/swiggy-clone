import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from '../mocks/resDataMock.json'
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

test("Should render Restaurant Card with Restaurant Name",()=>{
    render(<BrowserRouter><RestaurantCard resInfo={MOCK_DATA} /></BrowserRouter>)
    const resName = screen.getByText("Pizza Hut");
    expect(resName).toBeInTheDocument();

})