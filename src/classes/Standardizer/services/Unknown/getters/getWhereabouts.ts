import { Whereabout } from 'types/schemas/Whereabout'

export default async function getWhereabouts(): Promise<Whereabout> {
  // Blablabla
  return {
    location: {
      relativePosition: {
        raw: '5 rue jesaispaquoi, JesaisPAsou, 10243',
      },
    },
    recordDate: Date.now(),
  };
}
