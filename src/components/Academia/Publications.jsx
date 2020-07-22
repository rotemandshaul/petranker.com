import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import { academiaData } from '../../mock/data';

const { publications } = academiaData;

function Publications() {
  const [publicationsList, setPublicationsList] = useState(publications);

  const sortByYear = () => {
    const sorted = [...publicationsList].sort((a, b) => {
      return b.year - a.year;
    });
    setPublicationsList(sorted);
  };

  const sortByTitle = () => {
    const sorted = [...publicationsList].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setPublicationsList(sorted);
  };

  return (
    <section id="publications">
      <h1>Publications</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>
              <a href="#publications" onClick={sortByTitle} style={{ color: 'black' }}>
                Title <i class="fa fa-sort" aria-hidden="true" />
              </a>
            </th>
            <th>
              <a href="#publications" onClick={sortByYear} style={{ color: 'black' }}>
                Year <i class="fa fa-sort" aria-hidden="true" />
              </a>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          {publicationsList.map((publication) => (
            <tr key={publication.id}>
              <td>
                <a href={publication.url} target="_blank" rel="noopener noreferrer">
                  {publication.title}
                </a>
              </td>
              <td>{publication.year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default Publications;
