// function Slide(props) {
//     return (
//         <div>
//             {props.titolo}
//             <button>{props.buttonText}</button>
//         </div>
//     );
// }
import Col from 'react-bootstrap/Col';

function Slide({ titolo = 'ciao', buttonText }) {
    return (
        <Col xs={12} sm={6} md={3}>
            {titolo}
            <button>{buttonText}</button>
        </Col>
    );
}

export default Slide;
