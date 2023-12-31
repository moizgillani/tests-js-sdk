/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Repository, repositorySchema } from './repository';
import {
  ServiceDependencyPackageTypeEnum,
  serviceDependencyPackageTypeEnumSchema,
} from './serviceDependencyPackageTypeEnum';
import {
  ServiceOnboardingHelmGitBranch,
  serviceOnboardingHelmGitBranchSchema,
} from './serviceOnboardingHelmGitBranch';
import {
  ServiceOnboardingHelmGitTag,
  serviceOnboardingHelmGitTagSchema,
} from './serviceOnboardingHelmGitTag';
import {
  ServiceOnboardingHelmHelmrepo,
  serviceOnboardingHelmHelmrepoSchema,
} from './serviceOnboardingHelmHelmrepo';
import {
  ServiceOnboardingHelmYamlGitTag,
  serviceOnboardingHelmYamlGitTagSchema,
} from './serviceOnboardingHelmYamlGitTag';
import {
  ServiceOnboardingTerraformGitBranch,
  serviceOnboardingTerraformGitBranchSchema,
} from './serviceOnboardingTerraformGitBranch';
import {
  ServiceOnboardingTerraformGitTag,
  serviceOnboardingTerraformGitTagSchema,
} from './serviceOnboardingTerraformGitTag';
import {
  ServiceOnboardingYamlGitBranch,
  serviceOnboardingYamlGitBranchSchema,
} from './serviceOnboardingYamlGitBranch';
import { UploadTypeEnum, uploadTypeEnumSchema } from './uploadTypeEnum';
import {
  WorkloadRepositoryTypeEnum,
  workloadRepositoryTypeEnumSchema,
} from './workloadRepositoryTypeEnum';
import {
  WorkloadRevisionTypeEnum,
  workloadRevisionTypeEnumSchema,
} from './workloadRevisionTypeEnum';

/** Workload attribute of a service. */
export interface Workload {
  /** The auto-generated Id of the workload. */
  id?: string;
  /** Name of the workload needs to be deployed. */
  name: string;
  /** A brief workload description. */
  description?: string | null;
  /** Deployment package type. */
  packageType?: ServiceDependencyPackageTypeEnum | null;
  /** Allowed values are: GIT files (PULL_FROM_REPO), MANUAL_UPLOAD. */
  uploadType?: UploadTypeEnum;
  /** Repository types allowed: GIT/HELM. */
  repositoryType?: WorkloadRepositoryTypeEnum | null;
  /** In case of 'Pull files from my repository', The user can provide the existing repositoryID. */
  repositoryId?: string | null;
  /** Users can create a repository to maintain service artifacts. Repository would be either a Git or HELM repository. */
  repository?: Repository;
  /** Files which are being generated. */
  files?: string[] | null;
  /** Revision type can be a BRANCH or TAG. */
  revisionType?: WorkloadRevisionTypeEnum;
  helmGitBranch?: ServiceOnboardingHelmGitBranch;
  helmGitTag?: ServiceOnboardingHelmGitTag;
  helmYamlGitTag?: ServiceOnboardingHelmYamlGitTag;
  helmHelmrepo?: ServiceOnboardingHelmHelmrepo;
  yamlGitBranch?: ServiceOnboardingYamlGitBranch;
  terraformGitBranch?: ServiceOnboardingTerraformGitBranch;
  terraformGitTag?: ServiceOnboardingTerraformGitTag;
  /** The date on which the workload is created. */
  createdDate?: string;
  /** The date when the created workload was last modified. */
  lastModifiedDte?: string;
  /** Identity of the user who created the workload. */
  createdBy?: string;
  /** Identity of the user who updated the workload. */
  updatedBy?: string;
}

export const workloadSchema: Schema<Workload> = object({
  id: ['id', optional(string())],
  name: ['name', string()],
  description: ['description', optional(nullable(string()))],
  packageType: [
    'packageType',
    optional(nullable(serviceDependencyPackageTypeEnumSchema)),
  ],
  uploadType: ['uploadType', optional(uploadTypeEnumSchema)],
  repositoryType: [
    'repositoryType',
    optional(nullable(workloadRepositoryTypeEnumSchema)),
  ],
  repositoryId: ['repositoryId', optional(nullable(string()))],
  repository: ['repository', optional(lazy(() => repositorySchema))],
  files: ['files', optional(nullable(array(string())))],
  revisionType: ['revisionType', optional(workloadRevisionTypeEnumSchema)],
  helmGitBranch: [
    'helmGitBranch',
    optional(lazy(() => serviceOnboardingHelmGitBranchSchema)),
  ],
  helmGitTag: [
    'helmGitTag',
    optional(lazy(() => serviceOnboardingHelmGitTagSchema)),
  ],
  helmYamlGitTag: [
    'helmYamlGitTag',
    optional(lazy(() => serviceOnboardingHelmYamlGitTagSchema)),
  ],
  helmHelmrepo: [
    'helmHelmrepo',
    optional(lazy(() => serviceOnboardingHelmHelmrepoSchema)),
  ],
  yamlGitBranch: [
    'yamlGitBranch',
    optional(lazy(() => serviceOnboardingYamlGitBranchSchema)),
  ],
  terraformGitBranch: [
    'terraformGitBranch',
    optional(lazy(() => serviceOnboardingTerraformGitBranchSchema)),
  ],
  terraformGitTag: [
    'terraformGitTag',
    optional(lazy(() => serviceOnboardingTerraformGitTagSchema)),
  ],
  createdDate: ['createdDate', optional(string())],
  lastModifiedDte: ['lastModifiedDte', optional(string())],
  createdBy: ['createdBy', optional(string())],
  updatedBy: ['updatedBy', optional(string())],
});
