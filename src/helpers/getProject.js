import DataProjects from "../data/dataProjects";

const GetProject = ({id}) => {
    return DataProjects.filter(p => +p.id === +id)
}

export default GetProject;
