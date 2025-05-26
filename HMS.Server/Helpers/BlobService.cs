using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace HMS.Server.Helpers
{
    public class BlobService
    {
        private readonly string _connectionString;
        private readonly string _containerName;

        public BlobService(IConfiguration config)
        {
            _connectionString = config["AzureBlobStorage:ConnectionString"];
            _containerName = config["AzureBlobStorage:ContainerName"];
        }

        public async Task<string> UploadFileAsync(IFormFile file)
        {
            var blobClient = new BlobContainerClient(_connectionString, _containerName);
            await blobClient.CreateIfNotExistsAsync(PublicAccessType.Blob);

            string fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
            var blob = blobClient.GetBlobClient(fileName);

            using var stream = file.OpenReadStream();
            await blob.UploadAsync(stream, overwrite: true);

            return blob.Uri.ToString(); // returns full blob URL
        }
    }
}
