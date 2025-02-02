// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START datalineage_v1_generated_Lineage_SearchLinks_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location you want search in.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Send asset information in the **source** field to retrieve all
   *  links that lead from the specified asset to downstream assets.
   */
  // const source = {}
  /**
   *  Optional. Send asset information in the **target** field to retrieve all
   *  links that lead from upstream assets to the specified asset.
   */
  // const target = {}
  /**
   *  Optional. The maximum number of links to return in a single page of the
   *  response. A page may contain fewer links than this value. If unspecified,
   *  at most 10 links are returned.
   *  Maximum value is 100; values greater than 100 are reduced to 100.
   */
  // const pageSize = 1234
  /**
   *  Optional. The page token received from a previous `SearchLinksRequest`
   *  call. Use it to get the next page.
   *  When requesting subsequent pages of a response, remember that
   *  all parameters must match the values you provided
   *  in the original request.
   */
  // const pageToken = 'abc123'

  // Imports the Lineage library
  const {LineageClient} = require('@google-cloud/lineage').v1;

  // Instantiates a client
  const lineageClient = new LineageClient();

  async function callSearchLinks() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await lineageClient.searchLinksAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchLinks();
  // [END datalineage_v1_generated_Lineage_SearchLinks_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
