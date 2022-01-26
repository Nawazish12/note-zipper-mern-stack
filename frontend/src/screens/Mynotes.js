import Mainscreen from "../components/Mainscreen";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
// import notes from "../data/notes";
// import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNotes, deleteNoteAction } from "../actions/notesAction";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mynotes = ({ history, search }) => {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.noteListReducer);
  const userLogin = useSelector((state) => state.userLoginReducer);

  const { userInfo } = userLogin;
  const { notes, loading, error } = note;

  // creating successs
  const noteCreate = useSelector((state) => state.noteCreateReducer);
  const { success: successCreate } = noteCreate;
  // updating success
  const noteUpdate = useSelector((state) => state.noteUpdateReducer);
  const { success: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDeleteReducer);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  // const [notess, setnotess] = useState([]);
  const deleteHandler = (id) => {
    // if (window.confirm("Are you sure?")) {
    //   dispatch(deleteNoteAction(id));
    // }
    if (
      toast.error("deleted note!", {
        position: "top-center",
        closeOnClick: true,
        autoClose: 2000,
      })
    ) {
      dispatch(deleteNoteAction(id));
    }
  };
  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successUpdate,
    successCreate,
    successDelete,
    errorDelete,
    loadingDelete,
  ]);
  return (
    <>
      <Mainscreen title={`welcome back ${userInfo?.name}`}>
        <Link to="createnote">
          <Button size="lg">Create new note</Button>
        </Link>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loading && <Loading />}
        {error && <ErrorMessage />}
        {notes?.reverse().map((note) => (
          <Accordion key={note._id}>
            <Card className="mt-3 ">
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecorationColor: "none",
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                    flex: 1,
                  }}
                >
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {note.title}
                  </Accordion.Toggle>
                </span>
                <div>
                  <Button href={`/note/${note._id}`}>EDIT</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    DELETE
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">category -{note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on - {note.createdAt.substring(0, 10)}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
        <ToastContainer />
      </Mainscreen>
    </>
  );
};

export default Mynotes;
