import '@tomtom-international/web-sdk-maps/dist/maps.css';

import styled from '@mui/system/styled';
import { map } from '@tomtom-international/web-sdk-maps';
import { useEffect, useRef, useState } from 'react';

// TODO: Implement actual component
// This is just a test in order to add the Tom Tom dependency. Types, code linters and styles are to be completed
const StyledMapOutContainer = styled('div')(`
  height: 900px;

  > div {
    height: 500px;
    width: 100%;
  }
`);

export function MapControl(): JSX.Element {
  const mapElement = useRef();

  const [mapZoom] = useState(13);
  const [, setMap] = useState({});

  useEffect(() => {
    let mapInstance = map({
      key: '<tom tom key here>',
      container: mapElement.current as any,
      center: [-91.447182, 14.806793],
      zoom: mapZoom,
    });

    setMap(map);

    return () => mapInstance.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <StyledMapOutContainer>
        <div ref={mapElement as any} className="mapDiv" />
      </StyledMapOutContainer>
    </div>
  );
}
