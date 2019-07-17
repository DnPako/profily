import mergeResolvers from 'graphql-merge-resolvers';

import Me from './Me/resolvers';

const resolvers = [Me];

export default mergeResolvers.merge(resolvers);