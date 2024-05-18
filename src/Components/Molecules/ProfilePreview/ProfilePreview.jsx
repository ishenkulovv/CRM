import {
    ProfileCompanyName,
    ProfileFullName,
    ProfileImage,
    ProfileStyled,
    ProfileTexts,
} from "./styled";

export default function ProfilePreview() {
    return (
        <div>
            <ProfileStyled>
                <ProfileImage src="./assets/avatar.png" />
                <ProfileTexts>
                    <ProfileFullName>Tyanisha Obey</ProfileFullName>
                    <ProfileCompanyName>Makostore</ProfileCompanyName>
                </ProfileTexts>
            </ProfileStyled>
        </div>
    );
}
