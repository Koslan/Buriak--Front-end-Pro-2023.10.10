import { useSelector } from "react-redux";
import Entry from "../components/Entry";

function EntryList() {
  const list = useSelector((state) => state.list.value);

  const groupedEntries = [];
  for (let i = 0; i < list.length; i += 3) {
    groupedEntries.push(list.slice(i, i + 3));
  }

  return (
    <>
      {list.length < 1 ? (
        <p>No entries</p>
      ) : (
        <>
          <div className="list">
            {groupedEntries.map((group, index) => (
              <div key={index} className="entry-row">
                {group.map((entry) => (
                  <Entry key={entry.id} entry={entry} />
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default EntryList;
