import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from 'ng2-translate';

import { DivByPowerOfTwoPipe } from './pipes/div-by-power-of-two.pipe';
import {
  AffinityGroupService,
  AsyncJobService,
  AuthGuard,
  AuthService,
  ConfigService,
  DiskStorageService,
  ErrorService,
  IsoService,
  JobsNotificationService,
  LoginGuard,
  NotificationService,
  OsTypeService,
  ResourceLimitService,
  ResourceUsageService,
  SecurityGroupService,
  ServiceOfferingFilterService,
  ServiceOfferingService,
  SnapshotService,
  SSHKeyPairService,
  StorageService,
  TagService,
  TemplateService,
  VolumeService,
  ZoneService
} from './services';
import { SecurityGroupRulesManagerComponent } from './components/security-group-rules-manager.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    SecurityGroupRulesManagerComponent,
    DivByPowerOfTwoPipe
  ],
  declarations: [
    SecurityGroupRulesManagerComponent,
    DivByPowerOfTwoPipe
  ],
  providers: [
    AffinityGroupService,
    AsyncJobService,
    AuthGuard,
    AuthService,
    ConfigService,
    DiskStorageService,
    ErrorService,
    IsoService,
    JobsNotificationService,
    LoginGuard,
    NotificationService,
    OsTypeService,
    ResourceLimitService,
    ResourceUsageService,
    SSHKeyPairService,
    SecurityGroupService,
    ServiceOfferingFilterService,
    ServiceOfferingService,
    SnapshotService,
    TagService,
    TemplateService,
    VolumeService,
    ZoneService,
    { provide: 'INotificationService', useClass: NotificationService },
    { provide: 'IStorageService', useClass: StorageService },
  ]
})
export class SharedModule { }
