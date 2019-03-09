import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatDatepickerModule,
        MatFormFieldModule, MatInputModule, MatMenuModule,
        MatSidenavModule,MatCardModule,MatExpansionModule,
         } from '@angular/material';

@NgModule({
    imports: [MatButtonModule,MatIconModule,MatDatepickerModule,
            MatFormFieldModule,MatInputModule, MatMenuModule,MatSidenavModule,
            MatCardModule,MatExpansionModule],


    exports: [MatButtonModule, MatIconModule,MatDatepickerModule,MatFormFieldModule,
            MatInputModule, MatMenuModule,MatSidenavModule,MatCardModule, MatExpansionModule,
            ]   
})

export class MaterialModule {}




